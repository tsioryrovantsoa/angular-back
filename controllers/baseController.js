class BaseController {
  resOk = (res, data, message, statue = "ok") => {
    return res.status(200).send({ statue, message, data });
  };

  resKo = (res, message, statue = "ko") => {
    console.log("message :", JSON.stringify(message));
    return res.status(500).send({ statue, message: message.message });
  };
}
module.exports = BaseController;
