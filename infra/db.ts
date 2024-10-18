export const vpc = new sst.aws.Vpc("MyVpc");
export const database = new sst.aws.Postgres("NextjsDB", { vpc });