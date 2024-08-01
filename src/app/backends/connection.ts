import { Connection, createConnection } from "mongoose";

export const mongoConnectDB: Connection = createConnection(
	process.env.MONGO_URI as string
);

mongoConnectDB.on("error", (error) => {
	console.error("Database connection AWOL: ", error);
	process.exit(1);
});

mongoConnectDB.once("open", () => {
	console.log("Database Connected!!!");
});
