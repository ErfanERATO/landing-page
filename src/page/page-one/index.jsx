import React from "react";
import "../../assets/style/custom.scss";
import AboutBox from "../../components/about-us-box";
import Management from "../../components/management";
import Personnel from "../../components/personnel";
import Representation from "../../components/representation";
import SliderCustom from "../../components/slider";
import Supplies from "../../components/supplies";

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
        <div className="supplies-title fw-600">لوازم تحت پوشش</div>
        <div className="supplies-card">
          <Supplies />
        </div>
      </div>

      <div className="seperator-section">
        <div className="title">
          <div className="text fw-600">درباره تیم خبره ما</div>
        </div>
        <div className="trust-sub-text">اعتماد شما و سپردن پروژه</div>
        <div className="trust-sub2-text">متخصصان</div>
        <div className="description">
          <div className="trust-description">
            خدمات فناوری اطلاعات ما به کارشناسان تجارت و فناوری همگرا می شوند تا
            به
          </div>
          <div className="trust-description2">
            مدیریت دسته های تجاری کمک کنند
          </div>
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
