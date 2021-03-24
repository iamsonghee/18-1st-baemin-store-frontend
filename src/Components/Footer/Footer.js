import React, { Component } from 'react';
import './Footer.scss';
import footerLogo from './footerLogo.png';

class Footer extends Component {
  render() {
    const ulName = [
      '공지사항',
      '1:1문의',
      '이용약관',
      '개인정보처리방침',
      '판매처 안내',
    ];
    return (
      <div className="footerComponent">
        <footer className="footer">
          <div className="footerLogo">
            <img src={footerLogo} alt="logo" />
          </div>
          <div className="footerContents">
            <ul className="footerTop">
              {ulName.map(el => (
                <li>
                  <a> el </a>
                </li>
              ))}
              {/* <li>
                <a>공지사항</a>
              </li>
              <li>
                <a>1:1문의</a>
              </li>
              <li>
                <a>이용약관</a>
              </li>
              <li>
                <a>개인정보처리방침</a>
              </li>
              <li>
                <a>판매처 안내</a>
              </li> */}
            </ul>
            <div className="footerInfomation">
              <dl>
                <dt>상호 : </dt>
                <dd>(주)두루미와 형제들</dd>
              </dl>
              <dl>
                <dt>대표 :</dt>
                <dd>두루미현</dd>
              </dl>
              <dl>
                <dt>사업자등록번호</dt>
                <dd>000-00-00097</dd>
              </dl>
              <dl>
                <dt>통신판매업신고번호 : </dt>
                <dd>2020-위코드-0000</dd>
              </dl>
              <dl>
                <dt>[사업자정보확인]</dt>
                <dd></dd>
              </dl>
            </div>

            <div className="footerInfomation">
              <dl>
                <dt>대표번호 : </dt>
                <dd>0000-0000</dd>
              </dl>
              <dl>
                <dt>배민스토어 고객센터(0000-0000) 운영시간 :</dt>
                <dd>월-금 13:00-18:00(주말•공휴일 휴무)</dd>
              </dl>
            </div>

            <div className="footerInfomation">
              <dl>
                <dt>팩스번호 : </dt>
                <dd>000-000-0000</dd>
              </dl>
              <dl>
                <dt>메일 : </dt>
                <dd>fisinbi2@naver.com</dd>
              </dl>
              <dl>
                <dt>배민문방구 인스타그램 :</dt>
                <dd>@durumihyun</dd>
              </dl>
            </div>

            <div className="footerInfomation">
              <dl>
                <dt>주소 :</dt>
                <dd>서울특별시 광진구 화양동 17-68 </dd>
              </dl>
              <dl>
                <dt>호스팅제공 :</dt>
                <dd>깃헙</dd>
              </dl>
            </div>

            <p className="copyright">
              © durumi Brothers Corp. All right Reserved
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
