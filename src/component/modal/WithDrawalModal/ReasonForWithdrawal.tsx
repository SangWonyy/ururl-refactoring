import { DrawalLabel, InfoWrapper, ValueWrapper, WithdrawalArea } from "./withdrawalModal.style";
import { Dispatch, SetStateAction } from "react";

const ReasonForWithdrawal = function ReasonForWithdrawal(props: {
  setWithDrawalReason: Dispatch<SetStateAction<string>>;
}): JSX.Element {
  const { setWithDrawalReason } = props;
  return (
    <InfoWrapper>
      <DrawalLabel>탈퇴 사유</DrawalLabel>
      <ValueWrapper>
        <WithdrawalArea
          maxLength={500}
          onChange={(event) => {
            const inputValue = event.target.value;
            if (inputValue.length > 500) {
              alert("최대 500글자로 부탁드려요!");
              return;
            }
            setWithDrawalReason(inputValue);
          }}
          placeholder={"저희 URURL 팀이 소중한 피드백을 바탕으로 더 나은 서비스가 되도록 개선하겠습니다."}
        />
      </ValueWrapper>
    </InfoWrapper>
  );
};

export default ReasonForWithdrawal;
