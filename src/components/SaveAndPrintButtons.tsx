import { CButton } from '@coreui/react-pro'

interface SaveAndPrintButtonsProps {
  marginTop?: string
}

const SaveAndPrintButtons = ({ marginTop }: SaveAndPrintButtonsProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'nowrap',
        gap: '34px',
        justifyContent: 'flex-end',
        marginTop,
      }}
    >
      <CButton
        style={{ backgroundColor: '#747DEA', maxWidth: '309px', width: '100%' }}
      >
        Скачать
      </CButton>
      <CButton
        style={{ backgroundColor: '#747DEA', maxWidth: '309px', width: '100%' }}
      >
        Печать
      </CButton>
    </div>
  )
}

export default SaveAndPrintButtons
