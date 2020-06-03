const CLOUD_FUNCTION = 'haiyisheng'

async function wxcloud(action, data = {}) {
    return new Promise(function (resolve, reject) {
        data.action = action
        wx.showLoading({ title: '加载中...' })
        console.log('cloud Start:', data.action, data)
        wx.cloud.callFunction({
            name: CLOUD_FUNCTION,
            data,
            success: res => {
                console.log('cloud Retun:', data.action, res)
                wx.hideLoading()
                resolve(res)
            },
            fail: (e) => {
                console.log('cloud Fail:', e)
                wx.hideLoading()
                resolve({ msg: 'error' })
            }
        })
    })
}


module.exports = {
    wxcloud: wxcloud
}