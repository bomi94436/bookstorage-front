import { useRef, useState } from 'react'
import './editor.css'
// -- editor --
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import '@toast-ui/editor/dist/toastui-editor.css'
import { Editor } from '@toast-ui/react-editor'
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css'
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight'
// ------------
import { Input, Modal, Text } from '@stories'
import { postPreviewStyle } from './Post.styles'
import { StorageBook } from '@apis/bookStorage/type'
import { useMutation } from 'react-query'
import { postBookPosts } from '@apis/bookStorage'
import { AxiosError } from 'axios'

type PostReviewModalProps = {
  isOpen: boolean
  close: () => void
  title: string
  book: StorageBook
}

const PostReviewModal = ({ isOpen, close, title: modalTitle, book }: PostReviewModalProps) => {
  const editorRef = useRef<Editor | null>(null)
  const [title, setTitle] = useState<string>('')

  const { mutate: callAddBookPosts } = useMutation(postBookPosts, {
    onSuccess: () => {
      alert('리뷰 작성이 완료되었습니다.')
      close()
    },
    onError: (err: AxiosError) => {
      if (err.response?.status && err.response?.data.message) {
        alert(err.response?.data.message)
      } else {
        alert('문제가 발생했습니다. 다시 시도해주세요.')
      }
    },
  })

  const onSubmit = () => {
    const content = editorRef.current?.getInstance().getHTML()

    if (!title || !content) {
      alert('제목과 내용은 필수로 작성햐여야 합니다.')
      return
    }

    callAddBookPosts({
      bookstorageId: book.id,
      data: { title, bookPostType: 'REVIEW', content: content! },
    })
  }

  return (
    <Modal
      visible={isOpen}
      size="fullscreen"
      title={modalTitle}
      description={book.title}
      cancellable
      onCancel={close}
      confirmText="저장"
      onConfirm={onSubmit}
    >
      <div css={postPreviewStyle}>
        <div>
          <Text size="large" required>
            제목
          </Text>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력하세요."
          />
        </div>

        <div>
          <Text size="large" required>
            내용
          </Text>
          <Editor
            ref={editorRef}
            previewStyle="vertical"
            height="600px"
            // initialValue={initMarkdown}
            initialEditType="markdown"
            plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
          />
        </div>
      </div>
    </Modal>
  )
}

export default PostReviewModal
