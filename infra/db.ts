export const vpc = new sst.aws.Vpc("MyVpc", { bastion: true });
export const database = new sst.aws.Postgres("NextjsDB", { vpc });