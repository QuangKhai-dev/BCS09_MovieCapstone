import React from 'react';
import { Tabs } from 'antd';
const LichChieuCumRap = () => {
  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        tabPosition={'left'}
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
  );
};

export default LichChieuCumRap;
