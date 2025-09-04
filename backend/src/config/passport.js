import session from 'express-session';
import passport from 'passport';
import { Strategy as DiscordStrategy } from 'passport-discord';
import * as dotenv from 'dotenv';
import User from '../models/User.js';
dotenv.config();
import logger from '../utils/logger.js';
const secretSession = process.env.SECRET_SESSION;

const passportConfig = () => {
  
passport.serializeUser((user, done) => {
   
    done(null, user.id);
});

  passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err, null);
    }
});


// Configure a estratégia
passport.use(new DiscordStrategy({
    clientID: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
    callbackURL: process.env.DISCORD_REDIRECT_URI,
    scope: ['identify', 'email'] // Escopos que você quer do Discord
}, async (accessToken, refreshToken, profile, done) => {
    logger.success(`O processo de autenticação funcionou.✔`)
    logger.info(`\nConfira os dados trazidos na autorização:\nPerfil do Discord: ${JSON.stringify(profile.email)}\nAccess Token: ${accessToken}\nRefresh Token: ${refreshToken}`)
 try {
        // Tenta encontrar o usuário pelo Discord ID
        const user = await User.findOne({ discordId: profile.id });

        if (user) {
            // Se o usuário existe, retorna-o
            return done(null, user);
        } else {
            // Se o usuário é novo, cria um novo documento
            const newUser = new User({
                discordId: profile.id,
                username: profile.username,
                email: profile.email
            });

            const savedUser = await newUser.save();
            return done(null, savedUser);
        }
    } catch (err) {
        return done(err, null);
    }
    
    

}));

}

export default passportConfig;