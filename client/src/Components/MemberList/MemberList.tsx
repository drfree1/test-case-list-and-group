import React, { useState } from "react";
import Member from "./Member";
import "Assets/Styles/membersList.scss";
import Badge from "Components/Shared/Badge";
import Button from "Components/Shared/Button";
import QuestionModal from "Components/Shared/Modals/QuestionModal";

type Props = {};

const MemberList: React.FC = (props: Props) => {
  function openAddMemberModal() {
    setDeleteModalIsOpen(true);

    console.log("open add member modal");
  }

  function questionModalClosingActions() {
    console.log("closing");
    setDeleteModalIsOpen(false);
  }

  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState<boolean>(false);

  return (
    <div className="members-list-container">
      <div className="members-list-title-row">
        <div className="members-list-title">Member List</div>
        <Badge text={"31"} color={"blue"} exClass={"member-count"} />
      </div>
      <div className="members-list">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
          <Member key={index} setDeleteModalIsOpen={setDeleteModalIsOpen} />
        ))}
      </div>
      <Button
        iconName={"add"}
        text={"Add Member"}
        color={"blue-border"}
        size={"xl"}
        action={(): any => openAddMemberModal()}
      />
      <QuestionModal
        modalTitle={"Are you sure you want to delete this member?"}
        modalDesc={
          "If you delete this member, they will also be removed from any groups they join."
        }
        confirmBtnText={"Yes, I am sure"}
        confirmBtnAction={() => {
          console.log("confirmmmmm");
        }}
        cancelBtnText={"Cancel"}
        cancelBtnAction={() => {
          console.log("cancelllllll");
          setDeleteModalIsOpen(false);
        }}
        isOpen={deleteModalIsOpen}
        whenClosing={() => questionModalClosingActions()}
      />
    </div>
  );
};

export default MemberList;
