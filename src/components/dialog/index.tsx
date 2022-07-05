import React from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import Button from '../button'

import MUIDialog from '@material-ui/core/Dialog';

const Box = styled.div`
  margin: 20px;
`;

const Dialog = styled(MUIDialog)`
  .MuiPaper-root {
    border-radius: 12px;
  }
`;

const Cancel = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 19.6px;
  color: #BDBDBD;
  text-align: center;
  margin-bottom: 10px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

`;

const Text = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #313335;
  line-height: 28.8px;
  margin: 16px 0;
`;

const Description = styled.div`
  ::first-letter {
    text-transform: uppercase;
  }

  margin-top: 8px;
  color: #383838;
  font-size: 14px;
  font-weight: 500;
`;

const ImgNoSubtitle = styled.img`
  margin: 8px 0 -16px 0;
  width: 100%;
`;


type Props = {
  text: any;
  description?: any;
  image?: any;
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  onConfirmText?: string;
  onCancelText?: string;
  subtitle?: boolean;
  theme?: string;
};

export default function AlertDialog({
  isOpen,
  onClose,
  text,
  description,
  image,
  onConfirm,
  onConfirmText,
  onCancelText,
  subtitle,
  theme,
}: Props) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  React.useEffect(() => {
    if (isOpen) {
      setOpen(isOpen);
    }
  }, [isOpen]);

  return (
    <Dialog
      style={{ borderRadius: 12 }}
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Box>
        <Title>
          <MdClose onClick={handleClose} color="#00eadf" size="24px" style={{alignSelf: 'flex-end', margin: '-10px -10px 0 0', cursor: 'pointer' }}/>
          {(!subtitle && image) ?
            <Wrapper>
              <Text>{text}</Text>
              <Description style={{ fontSize: 12, lineHeight: '16px', margin: '0 0 40px 0'}}>{description}</Description>
            </Wrapper>
          :          
            <Text style={{ marginTop: -10, marginBottom: 27, color: '#000', lineHeight: '25.2px' }}>
            {text}

            {description && <Description>{description}</Description>}

            {image && <ImgNoSubtitle src={image} />}
          </Text>
          }
        </Title>
        <Button
          onClick={onConfirm}
          style={{ marginBottom: 14, fontWeight: 700 }}
          theme={theme ? theme : "salmon"}
          fullWidth
        >
          {onConfirmText}
        </Button>
        {
          onCancelText &&
          <Cancel onClick={handleClose}>{onCancelText}</Cancel>
        }
      </Box>
    </Dialog>
  );
}
