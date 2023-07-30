module.exports.errorSignup = (err) => {
  let errors = { pseudo: "", password: "", email: "" };
  if (err.message.includes("pseudo")) errors.pseudo = "pseudo est deja pris";
  if (err.message.includes("password"))
    errors.password =
      "le password est plus court il doit superieur ou egal a 6 caractere";
  if (err.message.includes("email"))
    errors.email = "email est  incorrect ou est deja pris";

  if (err.code === 1100 && Object.keys(err.keyvalue)[0].includes("pseudo"))
    errors.pseudo = "pseudo est deja pris";

  if (err.code === 1100 && Object.keys(err.keyvalue)[0].includes("email"))
    errors.email = "l'email est deja utilisee";
  return errors;
};

module.exports.errorSign = (err) => {
  let errors = { pseudo: "", password: "" };
  if (err.message.includes("pseudo"))
    errors.pseudo = "incorrecte pseudo or password";
  if (err.message.includes("password"))
    errors.password = "incorrecte pseudo or password";
  return errors;
};

module.exports.uploadErrors = (err) => {
  let errors = { format: "", maxSize: "" };
  if (err.message.includes("invalid file"))
    errors.format = "format incompatibility";
  if(err.message.includes("max size"))
    errors.maxSize = "le fichier est depasse 5MG"

  return errors;
};
