import { HiMenuAlt3 } from "react-icons/hi";
import {
  FiHome,
  FiUser,
  FiSettings,
  FiMail,
  FiHelpCircle,
} from "react-icons/fi";

export const sideBarData = [
  {
    name: "تعاریف پایه",
    icon: <HiMenuAlt3 />,
    subItems: [
      { name: "معرفی طرف حساب", icon: <HiMenuAlt3 /> },
      { name: "گروه بندی طرف‌های حساب", icon: <HiMenuAlt3 /> },
      { name: "گروه‌بندی فاکتور‌ها", icon: <HiMenuAlt3 /> },
      { name: "معرفی پرسنل", icon: <HiMenuAlt3 /> },
      { name: "معرفی انبار‌ها", icon: <HiMenuAlt3 /> },
      { name: "معرفی واحد شمارشی", icon: <HiMenuAlt3 /> },
      { name: "معرفی گروه اصلی و فرعی کالا", icon: <HiMenuAlt3 /> },
      { name: "معرفی کالا‌ها", icon: <HiMenuAlt3 /> },
      {
        name: "معرفی فرم موزائیکی کالاها در فاکتور سریع",
        icon: <HiMenuAlt3 />,
      },
      { name: "معرفی توضیحات کالا در فاکتور سریع" },
      { name: "معرفی خدمات", icon: <HiMenuAlt3 /> },
      { name: "معرفی گروهای ارزش افزوده", icon: <HiMenuAlt3 /> },
      { name: "معرفی انواع بانکهای کشور", icon: <HiMenuAlt3 /> },
      { name: "معرفی حساب‌های بانکی", icon: <HiMenuAlt3 /> },
      { name: "معرفی دستگاه کارتخوان", icon: <HiMenuAlt3 /> },
      { name: "معرفی شهرهای کشور", icon: <HiMenuAlt3 /> },
      { name: "طراحی ظاهر انواع چک", icon: <HiMenuAlt3 /> },
      { name: "معرفی درآمد / هزینه / صندوق", icon: <HiMenuAlt3 /> },
      { name: "معرفی سرفصل‌های حساب (کل,معین,تفضیل)", icon: <HiMenuAlt3 /> },
    ],
  },
  {
    name: "خرید و فروش",
    icon: <HiMenuAlt3 />,
    subItems: [
      { name: "فاکتور فروش", icon: <HiMenuAlt3 /> },
      { name: "فاکتور خرید", icon: <HiMenuAlt3 /> },
      { name: "فاکتور برگشت از فروش", icon: <HiMenuAlt3 /> },
      { name: "فاکتور برگشت از خرید", icon: <HiMenuAlt3 /> },
      { name: "پیش فاکتور فروش", icon: <HiMenuAlt3 /> },
      { name: "فاکتور ضایعات", icon: <HiMenuAlt3 /> },
      { name: "انتقال بین انبارها", icon: <HiMenuAlt3 /> },
      {
        name: "گزارشات خرید و فروش",
        icon: <HiMenuAlt3 />,
        subitems: [
          { name: "گزارش انواع فاکتورها", icon: <HiMenuAlt3 /> },
          { name: "گزارش دوره‌ای خرید و فروش", icon: <HiMenuAlt3 /> },
          { name: "گزارش فروش به تفکیک ماه, فصل , سال", icon: <HiMenuAlt3 /> },
          { name: "گزارش آماری خرید بر اساس کالا", icon: <HiMenuAlt3 /> },
          { name: "گزارش آماری خرید بر اساس طرف حساب", icon: <HiMenuAlt3 /> },
        ],
      },
      {
        name: "گزارش سود ناخالص و فروش کالا",
        icon: <HiMenuAlt3 />,
        subitems: [
          { name: "سود به تفکیک کالاها", icon: <HiMenuAlt3 /> },
          { name: "سود به تفکیک فاکتورها", icon: <HiMenuAlt3 /> },
          { name: "سود به تفکیک طرفهای حساب", icon: <HiMenuAlt3 /> },
        ],
      },
      { name: "صورت حساب سود و زیان", icon: <HiMenuAlt3 /> },
      { name: "گزارشات فصلی دارایی (TTMS)", icon: <HiMenuAlt3 /> },
      { name: "سامانه مودیان مالیاتی کشور", icon: <HiMenuAlt3 /> },
    ],
  },
  {
    name: "انبار",
    icon: <HiMenuAlt3 />,
    subItems: [
      { name: "فاکتور ضایعات", icon: <HiMenuAlt3 /> },
      { name: "انتقال بین انبارها", icon: <HiMenuAlt3 /> },
      { name: "عملیات انبارگردانی", icon: <HiMenuAlt3 /> },
      {
        name: "گزارشات کالا و انبار",
        icon: <HiMenuAlt3 />,
        subItems: [
          { name: "چاب بارکد و کیوارکد کالاها", icon: <HiMenuAlt3 /> },
          { name: "گردش کالا در انبار(کاردکس ریالی)", icon: <HiMenuAlt3 /> },
          { name: "موجودی تعدادی کالاهای انبار", icon: <HiMenuAlt3 /> },
          { name: "موجودی ریالی کالاهای انبار", icon: <HiMenuAlt3 /> },
          { name: "نقطه سفارش کالاها", icon: <HiMenuAlt3 /> },
          { name: "گزارش انبارگردانی", icon: <HiMenuAlt3 /> },
        ],
      },
    ],
  },
  {
    name: "مدیریت مالی",
    icon: <HiMenuAlt3 />,
    subItems: [
      {
        name: "اول دوره",
        icon: <HiMenuAlt3 />,
        subItems: [
          { name: "آموزش اول دوره", icon: <HiMenuAlt3 /> },
          { name: "اول دوره صندوق", icon: <HiMenuAlt3 /> },
          { name: "اول دوره حساب‌های بانکی", icon: <HiMenuAlt3 /> },
          { name: "اول دوره طرف حساب", icon: <HiMenuAlt3 /> },
          { name: "چک‌های دریافتی اول دوره", icon: <HiMenuAlt3 /> },
          { name: "چکهای پرداختی اول دوره", icon: <HiMenuAlt3 /> },
          { name: "موجودی اول دوره کالاها", icon: <HiMenuAlt3 /> },
        ],
      },
      { name: "دریافت / پرداخت", icon: <HiMenuAlt3 /> },
      { name: "اسناد حسابداری", icon: <HiMenuAlt3 /> },
      {
        name: "تبدیل اسناد حسابداری",
        icon: <HiMenuAlt3 />,
        subItems: [
          { name: "تبدیل اسناد موقت به دایم", icon: <HiMenuAlt3 /> },
          { name: "تبدیل اسناد دایم به موقت", icon: <HiMenuAlt3 /> },
          {
            name: "اسناد افتتاحیه و اختتامیه",
            icon: <HiMenuAlt3 />,
            subItems: [
              { name: "اسناد افتتاحیه", icon: <HiMenuAlt3 /> },
              { name: "اسناد اختتامیه", icon: <HiMenuAlt3 /> },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "مدیریت چک",
    icon: <HiMenuAlt3 />,
    subItems: [
      { name: "عملیات چک‌های دریافتی", icon: <HiMenuAlt3 /> },
      { name: "عملیات چک‌های پرداختی", icon: <HiMenuAlt3 /> },
      { name: "معرفی انواع بانک‌های کشور", icon: <HiMenuAlt3 /> },
      { name: "معرفی حساب‌های بانکی", icon: <HiMenuAlt3 /> },
      { name: "معرفی دسته چک", icon: <HiMenuAlt3 /> },
      { name: "گزارش دسته چک", icon: <HiMenuAlt3 /> },
      { name: "گزارش چک‌های دریافتی", icon: <HiMenuAlt3 /> },
      { name: "گزارش چک‌های پرداختی", icon: <HiMenuAlt3 /> },
      { name: "سابقه گردش چک دریافتی", icon: <HiMenuAlt3 /> },
      { name: "سابقه گردش چک پرداختی", icon: <HiMenuAlt3 /> },
    ],
  },
  {
    name: "گزارشات",
    icon: <HiMenuAlt3 />,
    subItems: [
      {
        name: "گزارشات کالاها و انبارها",
        icon: <HiMenuAlt3 />,
        subItems: [
          { name: "(کاردکس تعدادی) گردش کالا در انبار", icon: <HiMenuAlt3 /> },
          { name: "(کاردکس ریالی) گردش کالا در انبار", icon: <HiMenuAlt3 /> },
          { name: "موجودی تعدادی کالاهای انبار", icon: <HiMenuAlt3 /> },
          { name: "موجودی ریالی کالاهای انبار", icon: <HiMenuAlt3 /> },
          { name: "چاپ بارکد و کیوآرکد کالاها", icon: <HiMenuAlt3 /> },
          { name: "نقطه سفارش کالاها", icon: <HiMenuAlt3 /> },
          { name: "گزارش انبار گردانی", icon: <HiMenuAlt3 /> },
        ],
      },
      {
        name: "گزارشات صندوق",
        icon: <HiMenuAlt3 />,
        subItems: [{ name: "گزارش گردش حساب صندوق", icon: <HiMenuAlt3 /> }],
      },
      {
        name: "گزارشات بانکی",
        icon: <HiMenuAlt3 />,
        subItems: [
          { name: "گزارش گردش حساب", icon: <HiMenuAlt3 /> },
          { name: "خلاصه موجودی حساب‌های بانکی", icon: <HiMenuAlt3 /> },
          { name: "گزارش دسته چک", icon: <HiMenuAlt3 /> },
          {
            name: "وضعیت چک‌های بانک‌ها",
            icon: <HiMenuAlt3 />,
            subItems: [
              { name: "چک‌های دریافتی", icon: <HiMenuAlt3 /> },
              { name: "چک‌های پرداختی", icon: <HiMenuAlt3 /> },
            ],
          },
        ],
      },
      {
        name: "گزارشات هزینه",
        icon: <HiMenuAlt3 />,
        subItems: [{ name: "گزارش گردش حساب هزینه", icon: <HiMenuAlt3 /> }],
      },
      {
        name: "گزارشات درآمد",
        icon: <HiMenuAlt3 />,
        subItems: [{ name: "گزارش گردش حساب درآمد", icon: <HiMenuAlt3 /> }],
      },
      {
        name: "گزارشات طرف‌های حساب",
        icon: <HiMenuAlt3 />,
        subItems: [
          { name: "گزارش صورتحساب طرف حساب", icon: <HiMenuAlt3 /> },
          { name: "گزارش بدهکاران / بستانکاران", icon: <HiMenuAlt3 /> },
          { name: "گزارش خرید و فروش اقساطی", icon: <HiMenuAlt3 /> },
        ],
      },
      {
        name: "گزارشات واسطه‌های فروش",
        icon: <HiMenuAlt3 />,
        subItems: [
          { name: "گزارش فاکتور‌های واسطه فروش", icon: <HiMenuAlt3 /> },
          { name: "گزارش مدیریتی واسطه‌های فروش", icon: <HiMenuAlt3 /> },
          { name: "گزارش واسطه‌ها و طرف‌های حساب", icon: <HiMenuAlt3 /> },
        ],
      },
      {
        name: "گزارشات حسابداری",
        icon: <HiMenuAlt3 />,
        subItems: [
          { name: "فهرست سرفصل‌های حسابداری", icon: <HiMenuAlt3 /> },
          { name: "گزارش گردش حساب (کل/معین/تفضیل)", icon: <HiMenuAlt3 /> },
          { name: "گزارش تجمیعی سند (خلاصه)", icon: <HiMenuAlt3 /> },
          { name: "گزارش دفتر روزانه", icon: <HiMenuAlt3 /> },
          {
            name: "گزارش تراز آزمایشی",
            icon: <HiMenuAlt3 />,
            subItems: [
              { name: "تراز دو ستونی", icon: <HiMenuAlt3 /> },
              { name: "تراز چهار ستونی", icon: <HiMenuAlt3 /> },
              { name: "تراز شش ستونی", icon: <HiMenuAlt3 /> },
              { name: "تراز هشت ستونی", icon: <HiMenuAlt3 /> },
              { name: "تراز دوازده ستونی", icon: <HiMenuAlt3 /> },
            ],
          },
          { name: "مرور حساب‌ها", icon: <HiMenuAlt3 /> },
          { name: "صورت‌حساب سود و زیان", icon: <HiMenuAlt3 /> },
          {
            name: "گزارش ترازنامه",
            icon: <HiMenuAlt3 />,
            subItems: [
              { name: "نوع اول", icon: <HiMenuAlt3 /> },
              { name: "نوع دوم", icon: <HiMenuAlt3 /> },
              { name: "نوع سوم", icon: <HiMenuAlt3 /> },
            ],
          },
          { name: "گزارش مالیات بر ارزش افزوده", icon: <HiMenuAlt3 /> },
        ],
      },
      {
        name: "گزارشات خرید و فروش",
        icon: <HiMenuAlt3 />,
        subItems: [
          { name: "سود به تفکیک کالاها", icon: <HiMenuAlt3 /> },
          { name: "سود به فاکتورها", icon: <HiMenuAlt3 /> },
          { name: "سود به تفکیک طرف‌های حساب", icon: <HiMenuAlt3 /> },
        ],
      },
      { name: "گزارشات فصلی دارایی(TTMS)", icon: <HiMenuAlt3 /> },
      { name: "سامانه مودیان مالیاتی کشور", icon: <HiMenuAlt3 /> },
    ],
  },
  {
    name: "امنیت",
    subItems: [
      { name: "فهرست کاربران", icon: <HiMenuAlt3 /> },
      { name: "تغییر رمز کاربری", icon: <HiMenuAlt3 /> },
    ],
  },
  {
    name: "تنظیمات نرم‌افزار",
    subItems: [
      { name: "سال مالی نرم افزار", icon: <HiMenuAlt3 /> },
      {
        name: "تنظیمات نرم‌افزار",
        icon: <HiMenuAlt3 />,
        subItems: [
          { name: "تنظیمات اولیه", icon: <HiMenuAlt3 /> },
          { name: "تنظیمات استایل", icon: <HiMenuAlt3 /> },
        ],
      },
      { name: "کد فعال سازی نرم‌افزار", icon: <HiMenuAlt3 /> },
      { name: "افزونه‌های نرم‌افزار", icon: <HiMenuAlt3 /> },
      { name: "پشتیبانی سالیانه نرم‌افزار", icon: <HiMenuAlt3 /> },
    ],
  },
  {
    name: "امکانات",
    icon: <HiMenuAlt3 />,
    subitems: [
      { name: "درباره نرم افزار", icon: <HiMenuAlt3 /> },
      { name: "دفترچه تلفن", icon: <HiMenuAlt3 /> },
      { name: "تقویم شمسی", icon: <HiMenuAlt3 /> },
      { name: "ماشین حساب ویندوز", icon: <HiMenuAlt3 /> },
      { name: "تهیه نسخه پشتیبان", icon: <HiMenuAlt3 /> },
      { name: "بازیابی از نسخه پشتیبان", icon: <HiMenuAlt3 /> },
      { name: "سرویس دهنده اندرویدی", icon: <HiMenuAlt3 /> },
    ],
  },
];

export const leftBaritems = [
  {
    title: "طرف حساب",
    description: "Go to dashboard",
    icon: FiHome,
    href: "#home",
  },
  {
    title: "معرفی کالا",
    description: "View your personal info",
    icon: FiUser,
    href: "#profile",
  },
  {
    title: "فاکتور سریع",
    description: "Check your inbox",
    icon: FiMail,
    href: "#messages",
  },
  {
    title: "فاکتور فروش",
    description: "Manage preferences",
    icon: FiSettings,
    href: "#settings",
  },
  {
    title: "دریافت / پرداخت",
    description: "Get support",
    icon: FiHelpCircle,
    href: "#help",
  },
];
