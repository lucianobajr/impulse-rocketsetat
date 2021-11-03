import { serverHttp } from "./app";

serverHttp.listen(process.env.PORT, () => {
  console.log(`api is running in ${process.env.PORT} 🔥!`);
});
