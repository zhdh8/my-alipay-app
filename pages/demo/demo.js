// const app = getApp()
// const videoList = [
//   'https://www.runoob.com/try/demo_source/movie.mp4',
//   'https://admin.u3.com.cn/image/wanfeng/banner01.jpg',
//   'https://admin.gc-guide.cn/file/video.mp4',
// ]
// const total = videoList.length
// const videoContext = my.createVideoContext('video')
// let current = 1

Page({

  data: {
    videoList: [
      'http://banner.u3.com.cn/81F757D22A6CF0307F25737319553084.jpg',
      'https://admin.u3.com.cn/image/wanfeng/banner01.jpg',
      // 'https://www.runoob.com/try/demo_source/movie.mp4',
    ],
  },

  onLoad () {
    // this.play()
  },

  fetchList () {
    console.log('get')
    this.setData({
      videoList: [
        'http://banner.u3.com.cn/81F757D22A6CF0307F25737319553084.jpg',
        // 'https://admin.u3.com.cn/image/wanfeng/banner01.jpg',
        'https://www.runoob.com/try/demo_source/movie.mp4',
        'http://banner.u3.com.cn/81F757D22A6CF0307F25737319553084.jpg',
        // 'http://banner.u3.com.cn/E6E05FD0DFCB78C67A3D9F7A08960ECD.png',
        // 'https://admin.u3.com.cn/image/wanfeng/banner01.jpg',
        // 'https://admin.u3.com.cn/image/wanfeng/banner01.jpg',
        // 'http://banner.u3.com.cn/BE38DC7971AA54C5FBFAD8344BD2033C.jpg',
        // 'http://banner.u3.com.cn/82FFF96B40786BDED38FEB304708EE0A.jpg',
        'https://admin.gc-guide.cn/file/video.mp4',
      ],
    })
  },

})
