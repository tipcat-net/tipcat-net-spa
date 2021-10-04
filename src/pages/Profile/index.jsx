import { MemberForm } from './../../components/member/form';
import { AccountForm } from '../../components/account/form';
import { Layout } from './../../components/ui/layout';
import Steps from './../../components/steps';

export const Profile = () => {
  return (
    <Layout>
      <Steps steps={[<MemberForm />, <AccountForm />]}/>
    </Layout>
  )
}

export default Profile;