// const loginMiddleware = (req, res, next) => {
//   const { email, password } = req.body;
//   const errors = [];
//   const emailRegex = /[a-z0-9._]+@[a-z0-9-]+.[a-z]{2,3}/;
//   const passwordRegex =
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:

//   if (!emailRegex.test(email) || !passwordRegex.test(password)) {
//     errors.push({ message: "Email ou mot de passe incorrect" });
//   }
//   if (errors.length) {
//     res.status(422).json({ validationErrors: errors });
//   } else {
//     next();
//   }
// };
// module.exports = loginMiddleware;
