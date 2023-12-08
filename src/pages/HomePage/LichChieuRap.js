import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import { quanLyRapServ } from '../../services/quanLyRapServ';
const LichChieuRap = () => {
  const [rap, setRap] = useState([]);

  useEffect(() => {
    quanLyRapServ
      .getAllRap()
      .then((res) => {
        console.log(res);
        setRap(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="py-20">
      <div className="container">
        <Tabs
          defaultActiveKey="1"
          tabPosition={'left'}
          // style={{
          //   height: 220,
          // }}
          items={rap.map((item, index) => {
            return {
              // thuộc tính label tạo nội dung cho các nút tab
              label: <img className="w-10" src={item.logo} alt="" />,
              // key là khoá của tab, giúp cho một số chức năng sau này cần biết đang đứng ở tab nào
              key: item.maHeThongRap,
              // disabled giúp ngăn chặn người dùng bấm mở tab nếu giá trị là true
              // disabled: true,
              // children giúp hiển thị nội dung của tab mà chúng ta muốn
              children: `huu`,
            };
          })}
        />
      </div>
    </div>
  );
};

export default LichChieuRap;
