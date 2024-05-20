class BaseController {
  resOk = (res, data, message, code = 200, statue = "ok") => {
    return res.status(code).send({ statue, message, data });
  };

  resKo = (res, message, code = 500, statue = "ko") => {
    console.log("message :", JSON.stringify(message));
    return res.status(message.statusCode || code).send({ statue, message: message.message });
  };
}
module.exports = BaseController;
