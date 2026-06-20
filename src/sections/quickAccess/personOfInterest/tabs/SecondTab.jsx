import BirthDateInput from "../../../../components/BirthdayInput";
import CustomInput from "../../../../components/CustomInput";
import SelectBox from "../../../../components/SelectBox";

export default function SecondTab({ newRow, setNewRow }) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      <CustomInput
        label="نام مدیر عامل"
        newRow={newRow}
        name={"ceoName"}
        setNewRow={setNewRow}
      />
      <CustomInput
        label="کد/شناسه ملی"
        newRow={newRow}
        name={"nationalId"}
        setNewRow={setNewRow}
        type="number"
      />
      <BirthDateInput newRow={newRow} setNewRow={setNewRow} />
      <CustomInput
        label="شغل"
        newRow={newRow}
        setNewRow={setNewRow}
        name={"job"}
      />
      <CustomInput
        label="موبایل"
        newRow={newRow}
        name={"mobile"}
        setNewRow={setNewRow}
        type="number"
      />
      <CustomInput
        label="فاکس"
        newRow={newRow}
        name={"fax"}
        setNewRow={setNewRow}
        type="number"
      />
      <CustomInput
        label="تلفن"
        newRow={newRow}
        name={"phoneNumber"}
        setNewRow={setNewRow}
        type="number"
      />
      <CustomInput
        label="نوع فعالیت"
        newRow={newRow}
        name={"activityType"}
        setNewRow={setNewRow}
      />
      <CustomInput
        label="کد اقتصادی"
        newRow={newRow}
        name={"economicCode"}
        setNewRow={setNewRow}
        type="number"
      />
      <CustomInput
        label="ایمیل"
        newRow={newRow}
        name={"email"}
        setNewRow={setNewRow}
        type="email"
      />
      <CustomInput
        label="وبسایت"
        newRow={newRow}
        name={"website"}
        setNewRow={setNewRow}
      />
    </div>
  );
}
