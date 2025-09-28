import Book from "../models/Book.js";
import Weapon from "../models/Weapon.js";

 const getMyContributions = async (req, res) => {
  try {
    const { discordId } = req.user;

    // promisse.all faz com que as duas consultas sejam feitas em paralelo
    // ao invés de esperar a primeira terminar para começar a segunda
    // isso melhora a performance
    const [booksCount, weaponsCount] = await Promise.all([
      Book.countDocuments({ operator: discordId }),
      Weapon.countDocuments({ operator: discordId }),
    ]);


    const contributions = {
      books: booksCount,
      weapons: weaponsCount,

      total: booksCount + weaponsCount, 
    };

    res.json({ contributions });
  } catch (error) {
    console.error("Erro ao buscar suas contribuições:", error);
    res.status(500).json({ error: "Erro ao carregar suas contribuições" });
  }
};

export { getMyContributions };