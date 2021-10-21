import { useTranslation } from "react-i18next";
import { Layout } from '../../components/ui/Layout';
import { MembersTabs } from '../../components/members/members-tabs';

export const Members = () => {
  const { t } = useTranslation();

  return (
    <Layout title={ t('members.headerTitle') }>
      <MembersTabs />
    </Layout>
  )
}

export default Members;
