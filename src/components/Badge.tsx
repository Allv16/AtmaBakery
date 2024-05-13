type BadgeProps = {
  status: string;
};

export function TransactionStatusBadge({ status }: BadgeProps) {
  if (status === "Completed")
    return (
      <span className="badge bg-primary-lighter text-primary rounded-sm px-1 font-medium text-xs">
        {status}
      </span>
    );
  else if (status === "Cancelled")
    return <span className="badge badge-danger">{status}</span>;
}
