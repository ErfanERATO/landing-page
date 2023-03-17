import React from "react";
import "../../assets/style/custom.scss";
import AboutBox from "../../components/about-us-box";
import Management from "../../components/management";
import Personnel from "../../components/personnel";
import Representation from "../../components/representation";
import SliderCustom from "../../components/slider";
import ForeignSupplies from "../../components/foreignsupplies";
import InnerSupplies from "../../components/innersupplies";

const PageOne = () => {
  return (
    <div className="Main-content">
      <SliderCustom />

      <div className="about-us">
        <div className="about-us-title fw-600">درباره‌ی ما</div>

        <div className="about-us-description fw-500">
          <div>
            خدمات فنی ناصری مرکز تخصصی نصب، آموزش و تعمیرات لوازم خانگی در
            نیشابور بوده و مجری تخصصی خدمات
          </div>
          <div>
            پس از فروش برند های مطرح ایرانی و خارجی درکنار شماست تا دسترسی به
            متخصصان و تکنیسین های مجرب را برای شما آسان کند .
          </div>
          <div>
            علاوه بر گرد آوری تیم تخصصی تعمیرات ، استفاده از قطعات اصلی ارئه
            فاکتور انلاین و گارانتی رسمی است .
          </div>
          {/* <div>
            مجموعه ما با داشتن بیشترین متقاضی‌ در نیشابور برای خرید قطعات دستگاه
            ، شوینده مناسب ،کیسه جاروبرقی و انواع لوازم جانبی ،درخدمت شما
            مشتریان گرامی میباشد .
          </div> */}
        </div>

        <AboutBox />
      </div>

      <div className="representation-section">
        <div className="representation-title fw-600">نمایندگی‌های فعال</div>
        <div className="representation-card">
          <Representation />
        </div>
      </div>

      <div className="supplies-section">
        <div className="supplies-title fw-600">برند‌های خارجی</div>
        <div className="supplies-card">
          <ForeignSupplies />
        </div>
      </div>
      <div className="supplies-section">
        <div className="supplies-title fw-600">برند‌های ایرانی</div>
        <div className="supplies-card">
          <InnerSupplies/>
        </div>
      </div>

      <div className="management-section">
        <div className="management-title fw-600">کادر مدیریتی</div>
        <div className="management-card">
          <Management />
        </div>
      </div>

      <div className="personnel-section">
        <div className="personnel-title fw-600">پرسنل و تکنسین</div>
        <div className="personnel-card">
          <Personnel />
        </div>
      </div>
    </div>
  );
};

export default PageOne;
