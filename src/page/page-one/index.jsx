import React from "react";
import "../../assets/style/custom.scss";
import AboutBox from "../../components/about-us-box";
import Management from "../../components/management";
import Personnel from "../../components/personnel";
import Representation from "../../components/representation";
import SliderCustom from "../../components/slider";
import ForeignSupplies from "../../components/foreignsupplies";
import InnerSupplies from "../../components/innersupplies";
import Divider from "../../components/divider";

const PageOne = () => {
  return (
    <div className="Main-content">
      <SliderCustom />

      <div className="about-us">
        <h2 className="about-us-title fw-600">درباره‌ی ما</h2>

        <div className="about-us-description fw-500">
          <p>
            خدمات فنی ناصری مرکز تخصصی نصب، آموزش و تعمیرات لوازم خانگی در
            نیشابور بوده و مجری تخصصی خدمات
          </p>
          <p>
            پس از فروش برند های مطرح ایرانی و خارجی درکنار شماست تا دسترسی به
            متخصصان و تکنیسین های مجرب را برای شما آسان کند .
          </p>
          <p>
            علاوه بر گرد آوری تیم تخصصی تعمیرات ، استفاده از قطعات اصلی ارئه
            فاکتور انلاین و گارانتی رسمی است .
          </p>
          {/* <div>
            مجموعه ما با داشتن بیشترین متقاضی‌ در نیشابور برای خرید قطعات دستگاه
            ، شوینده مناسب ،کیسه جاروبرقی و انواع لوازم جانبی ،درخدمت شما
            مشتریان گرامی میباشد .
          </div> */}
        </div>

        <AboutBox />
      </div>

      <div className="representation-section">
        <h2 className="representation-title fw-600">نمایندگی‌های فعال</h2>
        <div className="representation-card">
          <Representation />
        </div>
      </div>

      <div className="divider-section">
        <Divider/>
      </div>

      <div className="supplies-section">
        <h2 className="supplies-title fw-600">برند‌های خارجی</h2>
        <div className="supplies-card">
          <ForeignSupplies />
        </div>
      </div>
      <div className="supplies-section">
        <h2 className="supplies-title fw-600">برند‌های ایرانی</h2>
        <div className="supplies-card">
          <InnerSupplies/>
        </div>
      </div>

      <div className="management-section">
        <h2 className="management-title fw-600">کادر مدیریتی</h2>
        <div className="management-card">
          <Management />
        </div>
      </div>

      <div className="personnel-section">
        <h2 className="personnel-title fw-600">پرسنل و تکنسین</h2>
        <div className="personnel-card">
          <Personnel />
        </div>
      </div>

    </div>
  );
};

export default PageOne;
