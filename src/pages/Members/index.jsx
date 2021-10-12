import { Layout } from '../../components/ui/Layout';
import { MembersTabs } from '../../components/members/members-tabs';
import { MembersItem } from '../../components/members/members-item';

export const Members = () => {

  return (
    <Layout>
      <MembersTabs />
      <MembersItem />
      <MembersItem />
      <MembersItem />
    </Layout>
  )
}

export default Members;