const app = getApp()
const videoContext = my.createVideoContext('video')


Component({
  mixins: [],
  data: {
    videoPath: '',
    imagePath: '',
    show: false,
    current: 0,
  },
  props: {
    needUpdate: false,
    list: [],
    onFetchList: '',
  },
  didMount() {
    this.props.list.length && this.play()
  },
  didUpdate(preProps) {
    console.log(this.props.needUpdate)
    if (preProps.list !== this.props.list) {
      this.setData({
        current: 0
      }, () => {
        this.props.list.length && this.play()
      })
    }

  },
  didUnmount() {},
  methods: {
    play () {

      const url = this.props.list[this.data.current]

      if (new RegExp('.(jpg|jpeg|png|gif)$').test(url)) {

        this.setData({
          imagePath: url,
          show: false,
        }, async () => {

          await app.sleep(5000)

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
      console.log('end')
      this.setData({
        current: this.data.current + 1
      }, () => {
        if (this.data.current === this.props.list.length) {
          this.props.onFetchList()
        } else {
          this.play()
        }
      })
    },
  },
})
