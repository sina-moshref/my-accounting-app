import { Typography } from "@mui/material";
import CustomInput from "../../../../components/CustomInput";
import SelectBox from "../../../../components/SelectBox";

export default function FourthTab({ newRow, setNewRow }) {
  return (
    <>
      <div dir="rtl" className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <CustomInput
          label="سقف اعتبار"
          newRow={newRow}
          setNewRow={setNewRow}
          name={"credit"}
          type="number"
        />
      </div>
      <Typography
        sx={{ display: "block", fontFamily: "Vazir", textAlign: "right" }}
      >
        .برای محاسبه مبلغ چک‌های پاس نشده چک‌های خرج شده‌ای که تاریخ سررسید آنها{" "}
        <input
          type="number"
          className="w-[30px] border"
          defaultValue={newRow.remainDays || 1}
        />{" "}
        روز قبل از تاریخ فاکتور باشند
      </Typography>
    </>
  );
}
