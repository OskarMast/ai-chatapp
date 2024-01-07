import { Controller, Post, Body } from '@nestjs/common';
/*This is a REST API part */

@Controller('chat')
export class ChatController {
  @Post()
  async receiveMessage(@Body() body: { userMessage: string }): Promise<{ botResponse: string }> {
    const userMessage = body.userMessage;
    const botResponse = this.generateResponse(userMessage);
    return { botResponse };
  }

  /*
      The code below is a simple response algorithm in which i have used REGEX or regular Expression matching
      The message is first normalised i.e made to lowercase and  trimmed. Trimming is done to check
      for the words or expression tomatch with those in our code and give a predefined response.

      The below is a very simple algorithm in ral time we canuse services using NLP for robust and prompt features
  */
  private generateResponse(userMessage: string): string {
    const normalizedMessage = userMessage.toLowerCase().trim();

    if (/hello|hi|hey/.test(normalizedMessage)) {
      return 'Hi there! Hope you havin a good day? How can i help?';
    } else if (/help|support/.test(normalizedMessage)) {
      return 'I will be glad to help please feel free to ask';
    } else if (/sports|football|basketball/.test(normalizedMessage)) {
      return 'Ok,are you looking for sports news or scores?';
    } else if (/politics|election|government/.test(normalizedMessage)) {
      return 'Political topics are controversial sometimes! What specific information are you looking for?';
    } else if (/call|phone|contact/.test(normalizedMessage)) {
      return 'Would you like to make a call or need assistance?';
    } else {
      return 'Sorry, I did not understand that. Could you possible rephrase your doubt?';
    }
  }
}
