import { ConfigProvider, Spin } from "antd";

export default function Loading() {
  return (
    <div className="h-[100vh] flex items-center justify-center w-full">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#5956E8",
            fontSize: 36,
          },
          components: {
            Spin: {
              dotSizeLG: 70,
            },
          },
        }}
      >
        <Spin size="large" />
      </ConfigProvider>
    </div>
  );
}
