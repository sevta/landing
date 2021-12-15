import Avatar from "../Avatar";
import Typography from "../Typography";

export default function Team() {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="text-center">
        <Typography.Overline>our team</Typography.Overline>
        <Typography.Heading type="h2">Meet the team</Typography.Heading>
      </div>
      <div className="flex items-center justify-between space-x-16 mt-14 w-[800px]">
        <div className="flex flex-col items-center justify-center space-y-4">
          <Avatar src="https://images.unsplash.com/photo-1639501344771-1444e9badf54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80" />
          <div className="text-center">
            <Typography.Caption size="xl">S.A Saputra</Typography.Caption>
            <Typography.Body size="sm" className="text-main-grayscale-900/50">
              Co-founder, CTO
            </Typography.Body>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4">
          <Avatar src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
          <div className="text-center">
            <Typography.Caption size="xl">Agresa</Typography.Caption>
            <Typography.Body size="sm" className="text-main-grayscale-900/50">
              Co-founder, CTO
            </Typography.Body>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4">
          <Avatar src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
          <div className="text-center">
            <Typography.Caption size="xl">Jane Cooper</Typography.Caption>
            <Typography.Body size="sm" className="text-main-grayscale-900/50">
              Co-founder, CTO
            </Typography.Body>
          </div>
        </div>
      </div>
    </div>
  );
}
