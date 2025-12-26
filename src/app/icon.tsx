import { ImageResponse } from 'next/og'
import { BadgePercent } from 'lucide-react'
 
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'
 
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'white',      // Fundo branco (para destacar no modo escuro)
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'black',           // Ícone preto (contraste máximo)
          borderRadius: '50%',      // Círculo perfeito
        }}
      >
        <BadgePercent size={20} />
      </div>
    ),
    {
      ...size,
    }
  )
}