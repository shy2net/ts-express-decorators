import {ServerLoader, ServerSettings} from "@tsed/common";
import {CreateRequestSessionMiddleware} from "./middlewares/CreateRequestSessionMiddleware";

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const compress = require("compression");
const methodOverride = require("method-override");
const session = require("express-session");

@ServerSettings({})
class Server extends ServerLoader {

  /**
   * This method let you configure the express middleware required by your application to works.
   * @returns {Server}
   */
  public $onMountingMiddlewares(): void | Promise<any> {

    this
      .use(cookieParser())
      .use(compress({}))
      .use(methodOverride())
      .use(bodyParser.json())
      .use(bodyParser.urlencoded({
        extended: true
      }));

    this.set("trust proxy", 1); // trust first proxy
    this.use(session({
      secret: "keyboard cat", // change secret key
      resave: false,
      saveUninitialized: true,
      cookie: {
        secure: false // set true if HTTPS is enabled
      }
    }));

    this.use(CreateRequestSessionMiddleware);
  }
}
