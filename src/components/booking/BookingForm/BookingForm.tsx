import { useSearchParams } from "react-router-dom";
import { ErrorMessage, Field } from "formik";
import { Link } from "react-router-dom";
import clsx from "clsx";

import InputField from "@/components/shared/InputField/InputField";

import css from "./BookingForm.module.css";

const BookingForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const plan = searchParams.get("plan");

  return (
    <div className={css.form}>
      <section className={css.sectionWrapper}>
        <h3 className={css.title}>
          Coverage Plan <span className={css.reqiered}>*</span>
        </h3>
        <p className={css.description}>Choose your insurance plan</p>
        <div className={css.planWrapper}>
          <label className={css.wrapper}>
            <Field
              type="radio"
              name="plan"
              value="Basic plan"
              checked={plan == "basic"}
              onChange={() => setSearchParams({ plan: "basic" })}
            />
            <svg className={css.redIcon} width={24} height={24}>
              <use href="/sprite.svg#icon-shield-off"></use>
            </svg>
            Basic Plan
          </label>
          <Link to="/policies" className={css.infoBtn}>
            <svg className={css.infoIcon} width={20} height={20}>
              <use href="/sprite.svg#icon-info"></use>
            </svg>
          </Link>
        </div>
        <div className={css.planWrapper}>
          <label className={css.wrapper}>
            <Field
              type="radio"
              name="plan"
              value="Full coverage"
              checked={plan == "full"}
              onChange={() => setSearchParams({ plan: "full" })}
            />
            <svg className={css.greenIcon} width={24} height={24}>
              <use href="/sprite.svg#icon-shield"></use>
            </svg>
            Full Coverage
          </label>
          <Link to="/policies" className={css.infoBtn}>
            <svg className={css.infoIcon} width={20} height={20}>
              <use href="/sprite.svg#icon-info"></use>
            </svg>
          </Link>
        </div>
      </section>
      <section className={css.sectionWrapper}>
        <h3 className={css.title}>
          Payment Method <span className={css.reqiered}>*</span>
        </h3>
        <p className={css.description}>Pay online and get the best price</p>

        <div className={css.methodWrapper}>
          <label className={css.wrapper}>
            <Field type="radio" name="paymentMethod" value="online" />
            Online
          </label>
          <p className={css.text}>
            <span className={css.accentTextRed}>-6$</span>/discount
          </p>
        </div>
        <span className={css.divider} />
        <div className={css.methodWrapper}>
          <label className={css.wrapper}>
            <Field type="radio" name="paymentMethod" value="offline" />
            Offline
          </label>
          <p className={css.text}>no discount</p>
        </div>
        <ErrorMessage
          name="paymentMethod"
          component="span"
          className={css.error}
        />
      </section>
      <section className={css.sectionWrapper}>
        <h3 className={css.title}>Your Contact Details & Quick Verification</h3>
        <p className={css.description}>
          Fill out for verification and rental registration
        </p>
        <span className={css.divider} />
        <div className={css.shortInputs}>
          <InputField
            label={"Phone number"}
            id={"phoneNumber"}
            placeholder={"+38(099) 999 99 99"}
            reqiered
          />
          <InputField
            label={"Date of birth"}
            id={"dateOfBirth"}
            placeholder={"YYYY.MM.DD"}
            reqiered
          />
        </div>

        <InputField
          label={"Full name"}
          id={"fullName"}
          placeholder={"Jane Doh"}
          reqiered
        />
        <InputField
          label={"Email address"}
          id={"email"}
          placeholder={"email@example.com"}
          reqiered
        />

        <div className={css.accentContainer}>
          <h3 className={clsx(css.accentTextGreen, css.title)}>
            Fast-track your pickup
          </h3>
          <p className={clsx(css.additionalDesc, css.accentTextGreen)}>
            Upload your documents now to speed up the verification process and
            make your car pickup seamless.
          </p>
          <span className={clsx(css.dividerGreen, css.divider)} />
          <p className={css.additionalDesc}>
            By submitting your passport and driver's license in advance, you
            help us complete your rental approval before you arrive. <br />
            <br />
            Your documents are securely stored and used only for booking
            verification. We never share your information with third parties —
            your privacy is fully protected. Upload your files and enjoy a
            quicker pickup — all that's left is to arrive and collect your car!
          </p>
        </div>
        <InputField
          label={"Passport"}
          id={"passport"}
          placeholder={"Serial number"}
        />
        <label className={css.fileWrapper}>
          <span className={css.label}>Passport Photo Upload</span>
          <Field className={css.fileInput} type="file" name="passportPhoto" />
          <p className={css.additionalDesc}>
            Upload a clear photo or scan of the main page of your passport. Make
            sure all details (name, date of birth, document number, issuing
            authority) are fully visible and not blurred.
          </p>
        </label>
        <InputField
          label={"Driver`s License"}
          id={"license"}
          placeholder={"Serial number"}
        />
        <label className={css.fileWrapper}>
          <span className={css.label}>Driver's License Upload</span>
          <Field className={css.fileInput} type="file" name="licensePhoto" />
          <p className={css.additionalDesc}>
            Upload a photo of the front side of your driver's license. Ensure
            that the license number, expiration date, and your full name are
            clearly readable.
          </p>
        </label>
      </section>
    </div>
  );
};

export default BookingForm;
