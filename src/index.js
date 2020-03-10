import { bootstrap, _ } from "frame";
import { appModule } from "./app/app.module";

_.delay(2000).then(() => {
  bootstrap(appModule);
});
