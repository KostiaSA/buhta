import {getInstantPromise} from "../../buhta-core-client/utils/getInstantPromise";
import {IProxyExecuteSqlRequest, executeSql, IProxyExecuteSqlAnswer} from "../../buhta-core-server/sql/executeSql";
import {msSqlConnection} from "./msSqlConfig";

export async function msSqlDataTypes(): Promise<void> {
    //console.log("yes");
    return new Promise<void>(
        (resolve: (obj?: void) => void, reject: (error: string) => void) => {

            let sql = `
SELECT
   CONVERT(IMAGE,0x652378AAAAAAAAAAAAAAAAA3636723) IMAGE_COLUMN,
   newid() GUID_COLUMN,             
   CONVERT(VARCHAR,'qwerty') VARCHAR_COLUMN,             
   CONVERT(NVARCHAR,'qwerty1') NVARCHAR_COLUMN,
   CONVERT(CHAR,'костя') CHAR_COLUMN,             
   CONVERT(NCHAR,'мостя') NCHAR_COLUMN,
   CONVERT(TEXT,'I currently have a resultset returned and in one of the columns the string value may be null') TEXT_COLUMN,
   CONVERT(NTEXT,'NNN I currently have a resultset returned and in one of the columns the string value may be null') NTEXT_COLUMN,
                
   CONVERT(BIT,1) BIT_COLUMN,
   CONVERT(BIT,0) BIT_COLUMN_FLASE,
   
   CONVERT(TINYINT,12) TINYINT_COLUMN,
   CONVERT(SMALLINT,-5512) SMALLINT_COLUMN,
   CONVERT(BIGINT,9007199254740991) BIGINT_COLUMN,
   
   CONVERT(DECIMAL(15,7),123456.87654321) DECIMAL_COLUMN,
   CONVERT(FLOAT,1.7976931348623157e+308) FLOAT_COLUMN,
   CONVERT(MONEY,9999.99125) MONEY_COLUMN,
--   null NULL_COLUMN,
   
   
   CONVERT(DATE,'2016-01-01') DATE_COLUMN,             
   CONVERT(TIME,'16:12:11.234456') TIME_COLUMN,             
   CONVERT(DATETIME,'2016-01-01 18:19:20.15') DATETIME_COLUMN,             
   
   SYSDATETIMEOFFSET() SYSDATETIMEOFFSET,  
   --CONVERT(SQL_VARIANT,9999.99125) VARIANT_COLUMN, 
   
   'fake' fake
          
    --WAITFOR DELAY '00:00:00.2'             
            
`;
           // sql = `select top 1000 Номер, Название from ТМЦ; select top 2000 Номер, Название from ТМЦ`;
            //sql = `select top 10000 * from ТМЦ WHERE гтд is null`;

            let sqlReq: IProxyExecuteSqlRequest = {
                ...msSqlConnection,
                sql: [sql]
            }

            executeSql(sqlReq)
                .then((res) => {

                    for (let i = 0; i < res.rowsets[0].columns.length; i++)
                        console.log(res.rowsets[0].columns[i].name, res.rowsets[0].rows[0][i].toString(),typeof res.rowsets[0].rows[0][i]);

                    console.log("msSqlDataTypes: Ok ", res.rowsets[0].rows.length);
                   // console.log("msSqlDataTypes: Ok ", res.rowsets[0].rows);
                    resolve();
                })
                .catch((err) => {
                    console.error("msSqlDataTypes: ", err);
                    reject(err);
                });

        });

}
