import app from "./app";
import("./database");

app.listen(3333, err => {
  if (err) return err;

  console.log(`Server on port 3333`);
});
