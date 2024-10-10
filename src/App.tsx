import React, { useState } from "react"
import { Bell, Settings, CreditCard, ChevronRight } from "lucide-react"

export default function MembershipCenter() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentPage, setCurrentPage] = useState('main')
  const [rechargeAmount, setRechargeAmount] = useState(0)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleRecharge = (amount: number) => {
    setRechargeAmount(amount)
    setCurrentPage('recharge')
  }

  const rechargeOptions = [
    { recharge: 20, price: 18 },
    { recharge: 50, price: 45 },
    { recharge: 100, price: 85 },
    { recharge: 200, price: 180 },
  ]

  const renderMainContent = () => (
    <div className="max-w-md mx-auto bg-gradient-to-b from-blue-50 to-white min-h-screen text-gray-800 shadow-xl">
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-6 rounded-b-[40px] shadow-lg">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">会员中心</h1>
          <div className="flex gap-4">
            <Bell className="w-6 h-6 cursor-pointer hover:text-blue-200 transition-colors" />
            <Settings className="w-6 h-6 cursor-pointer hover:text-blue-200 transition-colors" />
          </div>
        </div>
        {isLoggedIn ? (
          <>
            <div className="flex items-center gap-4 mb-8">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="用户头像"
                className="w-20 h-20 rounded-full border-4 border-white shadow-md"
              />
              <div>
                <h2 className="text-2xl font-semibold">张三</h2>
                <p className="text-sm text-blue-200">尊贵会员</p>
              </div>
            </div>
            <div className="flex justify-between items-center bg-white bg-opacity-20 rounded-xl p-4">
              <div>
                <p className="text-sm text-blue-100">当前余额</p>
                <p className="text-3xl font-bold">¥3,580.00</p>
              </div>
              <button 
                className="
                  bg-white text-blue-600 px-4 py-2 rounded-lg
                  hover:bg-blue-50 transition-all duration-200 ease-in-out
                  font-semibold shadow-md hover:shadow-lg
                "
              >
                查看历史订单
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center gap-6 py-10">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
              <CreditCard className="w-12 h-12 text-blue-500" />
            </div>
            <button 
              onClick={handleLogin} 
              className="
                bg-white text-blue-600 
                hover:bg-blue-50 hover:scale-105
                transition-all duration-200 ease-in-out
                shadow-md hover:shadow-lg
                text-lg font-semibold
                px-8 py-3 rounded-full
              "
            >
              点击授权并绑定手机号
            </button>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-6 text-blue-800">充值中心</h3>
        <div className="space-y-4">
          {rechargeOptions.map(({ recharge, price }) => (
            <button
              key={recharge}
              className="w-full p-4 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-200 border border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 group"
              onClick={() => handleRecharge(recharge)}
            >
              <div className="flex justify-between items-center">
                <div className="flex flex-col items-start">
                  <span className="text-2xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors">充值 ¥{recharge}</span>
                  <span className="text-sm text-green-600 font-semibold">
                    优惠价 ¥{price}
                  </span>
                </div>
                <div className="flex items-center text-blue-500 group-hover:text-blue-600 transition-colors">
                  <span className="text-lg font-semibold mr-2">
                    省¥{recharge - price}
                  </span>
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  const renderRechargePage = () => (
    <div className="max-w-md mx-auto bg-gradient-to-b from-blue-50 to-white min-h-screen text-gray-800 shadow-xl p-6">
      <h2 className="text-2xl font-bold mb-4">充值确认</h2>
      <p className="text-lg mb-4">您正在充值 ¥{rechargeAmount}</p>
      <button 
        onClick={() => setCurrentPage('main')}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        返回
      </button>
    </div>
  )

  return currentPage === 'main' ? renderMainContent() : renderRechargePage()
}