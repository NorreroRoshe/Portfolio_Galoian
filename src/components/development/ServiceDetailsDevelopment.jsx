import React, {useEffect, useState} from "react";
import ThumbDev1 from "../../../public/assets/imgs/thumb/dev-1.jpg";
import ThumbDev2 from "../../../public/assets/imgs/thumb/dev-2.jpg";
import Image from "next/image";
import Link from "next/link";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const resumeLink = "/assets/imgs/service/GaloyanSV.pdf";

const ServiceDetailsDevelopment = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <>
      <section className="development__area">
        <div className="container g-0 line pt-130 pb-150">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5" style={{marginBottom: '40px'}}>
              <div className="sec-title-wrapper">
                <h2 className="sec-title animation__char_come">
                  Summary
                </h2>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
              <div className="development__img" style={{height: '100px'}}>
                <h2><Link href='https://hh.ru/applicant/resumes/view?resume=74052d2bff0b6e9c4d0039ed1f6745516c6a33'>HH.ru/GaloyanNorik</Link></h2>
              </div>
              <div className="development__img" style={{height: '100px'}}>
                <h2><Link href={resumeLink}>Download CV</Link></h2>
              </div>
            </div>
            <Document file={resumeLink} className="d-flex justify-content-center">
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
            <div className="development__img" style={{ margin: '0 auto', marginTop: '40px', textAlign: 'center', textDecoration: 'underline', color: 'blue'}}>
              <h2><Link href={resumeLink}>Посмотреть полностью</Link></h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsDevelopment;
