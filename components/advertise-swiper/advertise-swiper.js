const app = getApp()
const videoContext = my.createVideoContext('video')
let current = 1

Component({
  mixins: [],
  data: {
    videoPath: '',
    imagePath: '',
    show: false,
  },
  props: {
    lists: [],
    onFetchLists: '',
  },
  didMount() {
    this.props.lists.length && this.play()
  },
  didUpdate() {

  },
  didUnmount() {},
  methods: {
    play () {

      const url = this.props.lists[current - 1]

      if (new RegExp('.(jpg|jpeg|png|gif)$').test(url)) {

        this.setData({
          imagePath: url,
          show: false,
        }, async () => {

          await app.sleep(3000)

          this.onEnded()
        })
      } else {

        this.setData({
          videoPath: url,
          show: true,
        }, () => {

          videoContext.play()
        })
      }

    },

    onEnded () {

      current = current === this.props.lists.length ? 1 : current + 1

      // 播最后一张时，请求最新的广告列表数据
      if (current === this.props.lists.length) {
        this.props.onFetchLists()
        current = this.props.lists.length
      }

      console.log(current, this.props.lists.length)

      this.play()
    },
  },
})
