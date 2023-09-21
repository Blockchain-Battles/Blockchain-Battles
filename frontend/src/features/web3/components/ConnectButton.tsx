import { ConnectButton as RainbowConnectButton } from "@rainbow-me/rainbowkit";
type Props = {};
const ConnectButton = (props: Props) => {
  return (
    <div className="mx-4">
      <RainbowConnectButton
        accountStatus={"address"}
        showBalance={false}
        chainStatus={"icon"}
      />
    </div>
  );
};
export default ConnectButton;
