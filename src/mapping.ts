import { BigInt } from "@graphprotocol/graph-ts";
import {
  Instaindex,
  LogAccountCreated,
  LogNewAccount,
  LogNewCheck,
  LogNewMaster,
  LogUpdateMaster,
} from "../generated/Instaindex/Instaindex";
import { LogNewAcc } from "../generated/schema";

export function handleLogAccountCreated(event: LogAccountCreated): void {
  let entity = LogNewAcc.load(event.params.account.toHex());
  if (!entity) {
    entity = new LogNewAcc(event.params.account.toHex());
  }
  entity.sender = event.params.sender;
  entity.owner = event.params.owner;
  entity.account = event.params.account;
  entity.orgin = event.params.origin;
  entity.save();
}

// export function handleLogNewAccount(event: LogNewAccount): void {}

// export function handleLogNewCheck(event: LogNewCheck): void {}

// export function handleLogNewMaster(event: LogNewMaster): void {}

// export function handleLogUpdateMaster(event: LogUpdateMaster): void {}
