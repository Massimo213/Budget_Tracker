import React from "react";
import { Card, ProgressBar, Button, Stack } from "react-bootstrap";

import { currencyFormatter } from "../currency";
export default function BudgetCard({
  name,
  amount,
  max,
  gray,
  onAddExpenseClick,
  hideButtons,
  onViewExpenseClick
}) {
  const classNames = [];
  if (amount > max) {
    classNames.push("bg-danger", "bg-opacity-10");
  } else if (gray) {
    classNames.push("bg-light");
  }
  return (
    <Card className={classNames.join(" ")}>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
          <div className="me-2">{name}</div>
          <div className="d-flex align-item-baseline">
            {currencyFormatter.format(amount)}
            {max && (
              <span className="text-muted fs-6 ms-1">
                /{currencyFormatter.format(max)}
              </span>
            )}
          </div>
        </Card.Title>
        {max && (
          <ProgressBar
            className="rounded-pill"
            variant={getProgressBarVar(amount, max)}
            min={0}
            max={max}
            now={amount}
          />
        )}
       {!hideButtons &&(<  Stack direction="horizental" gap="2" className="mt-4">
          <Button
            variant="outline-primary"
            className="ms-auto"
            onClick={onAddExpenseClick}
          >
            Add Expenses
          </Button>
          <Button variant="outline-primary"onClick={onViewExpenseClick} >View Expenses</Button>
        </Stack>
        )}
      </Card.Body>
    </Card>
  );
}
function getProgressBarVar(amount, max) {
  const ratio = amount / max;
  if (ratio < 0.5) return "primary";
  if (ratio < 0.75) return "warning";
  return "danger";
}
