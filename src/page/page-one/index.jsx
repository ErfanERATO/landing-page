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
        <div className="about-us-title">درباره‌ی ما</div>

        <div className="about-us-description">
          <div className="about-us-description-text">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          </div>
          <div className="about-us-description-text">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          </div>
          <div className="about-us-description-text">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          </div>
        </div>

        <AboutBox />
      </div>

      <div className="representation-section">
        <div className="representation-title">نمایندگی‌های فعال</div>
        <div className="representation-card">
          <Representation />
        </div>
      </div>

      <div className="supplies-section">
        <div className="supplies-title">لوازم تحت پوشش</div>
        <div className="supplies-card">
          <Supplies />
        </div>
      </div>

      <div className="seperator-section">
        <div className="title">
          <div className="text">درباره تیم خبره ما</div>
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
        <div className="management-title">کادر مدیریتی</div>
        <div className="management-card">
          <Management />
        </div>
      </div>

      <div className="personnel-section">
        <div className="personnel-title">پرسنل و تکنسین</div>
        <div className="personnel-card">
          <Personnel />
        </div>
      </div>
    </div>
  );
};

export default PageOne;
