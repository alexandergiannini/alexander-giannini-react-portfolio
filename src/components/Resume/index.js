import React from 'react';
//import coverImage from "../../assets/cover/cover-image.jpg";
//add an alt attribute to the img src
function Resume() {
    return (
      <section className="m-5">
        <h1 id="about">Resume</h1>
        <a href="https://mail-attachment.googleusercontent.com/attachment/u/1/?ui=2&ik=ff8b1158e1&attid=0.1&permmsgid=msg-a:r-3163638857406147646&th=174cccdf2f2a8a16&view=att&disp=inline&realattid=f_kfkbiehm0&saddbat=ANGjdJ9Sq3ilt1-h16JPiPRX8SkZVhnPxSQsLp3TTlrIu-GZZLFvI4k0OJNPhUCWYdYpuW_klCXWu7aMJpSwz0pPArRwobw-XCw7UQUlv6H-Lc4hkaeIdF-FuZaVY48g9l34tHqOy-wwbZjV7UIGvqulk9UEaSa9M-wvX8mlbJ4ZUPL9xdpTo1Htd6NtdHslOZMnsMAXBZ06zU8h8Q4MTEBUlYbRpU4Uj0RuLvRMKljo1MHm2jwLcueg_1zIjfYnTPuyqzt1cg4iIiqNxCrkZxvqyPhSTs-urRc_OGqR8bPkY2ovDftAGGIyWhza-8W88OizQEmOCn_yo-YzYIf4zcfvANjfwh46Tgy6JsRdF0fBKyyGvB-MdbYXQ2iQcJJDoixHflIOpVowpncz4Ni-Tita01qdGSqWOf3ZCbhp6QPcsUMcbaPqFnr_VqrmDh8PAwc37__9oSkztWWFMXHQaig9RJooDak0tTP43QHIbZIoEaJArHTWNfWC4KhXPly8RFhTBLzOuzCZQ0nhIDO2kM6USZsqxc3EDGo9FcRkGFyAF1waxoQ9OKQqajYDXBU98UyfarEpz-qyN7Ig5ZPhgCF2WQMF7RMq-25jkGHTjI8xaVdmVlfIb_c4Wg029bR83VSsaIra-5lecdo6EKvWBGFaPRCmqkagbengFaMJJkkzfbLhd0Ckfl_BpIrfPvI" target="_blank" id="resume-link">Download my resume</a>
        <h2>Frontend Proficiencies</h2>
        <ul>
            <li className="li-proficiences">
                HTML
            </li>
            <li className="li-proficiences">
                CSS
            </li>
            <li className="li-proficiences">
                JavaScript
            </li>
            <li className="li-proficiences">
                jQuery
            </li>
            <li className="li-proficiences">
                Bootstrap
            </li>
            <li className="li-proficiences">
                React.js
            </li>
            <li className="li-proficiences">
                Bulma
            </li>
        </ul>
        <h2>Backend Proficiencies</h2>
        <ul>
            <li className="li-proficiences">
                MongoDB
            </li>
            <li className="li-proficiences">
                MYSQL
            </li>
            <li className="li-proficiences">
                Sequelize
            </li>
            <li className="li-proficiences">
                Express.js
            </li>
        </ul>
    
      </section>
    );
  }

export default Resume;