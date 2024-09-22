import React from 'react'
import {  Space, Spin } from 'antd';
const Loader = () => {
  return (
    <div className='flex  items-center justify-center h-[100vh] flex-col gap-[20px] '>
        <p className='font-sans:[system-ui] font-semibold text-[30px] '>Loading please wait</p>
        <Space size='middle'>
      <Spin size="large" />
      </Space>
    </div>
  )
}

export default Loader
