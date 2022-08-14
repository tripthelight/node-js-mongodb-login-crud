const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/User');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    console.log('email : ', email);
    console.log('password : ', password);
    // Match Email's user
    const user = await User.findOne({email});
    if (!user) {
        return done(null, false, { message: 'User Not Found' });
    } else {
        // Math Password's User
        const match = await user.matchPassword(password);
        console.log('match : ', match);
        if (match) {
            return done(null, user);
        } else {
            return done(null, false, { message: 'Incorrect Password.' });
        }
    }
}));

passport.serializeUser((user, done) => {
    console.log('user.id : ', user.id);
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    console.log('id : ', id);
    User.findById(id, (err, user) => {
        console.log('err : ', err);
        console.log('user : ', user);
        done(err, user);
    });
});