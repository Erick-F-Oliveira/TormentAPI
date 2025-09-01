import session from 'express-session';
import passport from 'passport';
import { Strategy as DiscordStrategy } from 'passport-discord';
import * as dotenv from 'dotenv';
dotenv.config();
const secretSession = process.env.SECRET_SESSION;

const passportConfig = () => {
  

// server.js

// ... depois da configuração do app.use(passport.session()) ...

passport.serializeUser((user, done) => {
    // Apenas salva o ID do usuário na sessão
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    // Aqui você buscaria o usuário no seu banco de dados pelo ID
    // Por enquanto, vamos simular a busca
    const user = { id: id, username: 'ExemploUser' }; 
    done(null, user);
});

// Configure a estratégia
passport.use(new DiscordStrategy({
    clientID: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
    callbackURL: process.env.DISCORD_REDIRECT_URI,
    scope: ['identify', 'email'] // Escopos que você quer do Discord
}, (accessToken, refreshToken, profile, done) => {
    // Esta função é chamada quando a autenticação é bem-sucedida.
    // O 'profile' contém os dados do usuário do Discord.
    // Aqui é onde você salvaria o usuário no seu banco de dados ou o buscaria.
    // A chamada 'done(null, profile)' passa o usuário para o passport.
    return done(null, profile);
}));

}

export default passportConfig;