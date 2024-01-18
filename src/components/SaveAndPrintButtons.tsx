import { CButton } from '@coreui/react-pro'
import printJS from 'print-js'

interface SaveAndPrintButtonsProps {
  marginTop?: string
  elIdToPrint: string
  elToPrintStyle?: string
}

const SaveAndPrintButtons = ({
  marginTop,
  elIdToPrint,
  elToPrintStyle,
}: SaveAndPrintButtonsProps) => {
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
        style={{
          backgroundColor: '#747DEA',
          maxWidth: '309px',
          width: '100%',
        }}
        onClick={() => {
          printJS({
            printable: elIdToPrint,
            type: 'html',
            style: elToPrintStyle,
            targetStyles: ['*'],
          })
        }}
      >
        Печать
      </CButton>
    </div>
  )
}

export default SaveAndPrintButtons
