import React,{Component} from 'react'

// flex布局
import { Flex,NavBar,Icon,List,InputItem,Button,WingBlank,WhiteSpace} from 'antd-mobile';
import './login.css'

class Login extends Component{
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    // let style = {width:'100%'}
    return <div>
      <Flex direction="column">
        {/* <Flex.Item style={style}> */}
        <Flex.Item>
        <NavBar
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          <Icon key="1" type="ellipsis" />,
          ]}
        >登录首页</NavBar>
        </Flex.Item>
        <WhiteSpace size="lg"/>

        <Flex.Item>
          {/* <WingBlank> 两翼留白 */}
          <WingBlank>
            <List>
                <InputItem value="" editable={true}>姓名</InputItem>
                <InputItem value="" editable={true}>密码</InputItem>
            </List>
            {/* <WhiteSpace size="lg"/>上下留白 */}
            <WhiteSpace size="lg"/>

            <Button type="primary">登录</Button>
          </WingBlank>
        </Flex.Item>

      </Flex>

    </div>
  }
}

export default Login