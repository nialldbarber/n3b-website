import { Text } from "ui";
import { MainLayout } from "../../components/layout/main";

export default function Loading(): JSX.Element {
  return (
    <MainLayout full>
      <Text level="2">Loading...</Text>
    </MainLayout>
  )
}
